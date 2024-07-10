import React, { useState } from 'react';
import { createAd } from '../services/adService'; 
import css from './AddForm.module.css';

interface AdData {
  id?: number;
  name: string;
  clicks: number;
  impressions: number;
};

interface AddAdFormProps {
  onAdAdded: (ad: AdData) => void;
};



const AddAdForm: React.FC<AddAdFormProps> = ({ onAdAdded }) => {
    const [name, setName] = useState('');
    const [clicks, setClicks] = useState('');
    const [impressions, setImpressions] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newAd = {
            name,
            clicks: parseInt(clicks, 10),
            impressions: parseInt(impressions, 10),
        };
        try {
            const addedAd = await createAd(newAd);
            onAdAdded(addedAd); 
            setName('');
            setClicks('');
            setImpressions('');
            window.location.reload();
        } catch (error) {
            console.error("Ooops! Error in creating the ad!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.field}>
                <label className={css.label}>Name:</label>
                <input
                    className={css.input}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className={css.field}>
                <label className={css.label}>Clicks:</label>
                <input
                    className={css.input}
                    type="number"
                    value={clicks}
                    onChange={(e) => setClicks(e.target.value)}
                    required
                />
            </div>
            <div className={css.field}>
                <label className={css.label}>Impressions:</label>
                <input
                    className={css.input}
                    type="number"
                    value={impressions}
                    onChange={(e) => setImpressions(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={css.btn}>Add Ad</button>
        </form>
    );
};

export default AddAdForm;
