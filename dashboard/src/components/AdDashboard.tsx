import {useEffect, useState } from "react";
import { fetchAds} from "../services/adService";
import {Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from "recharts";
import css from './AdDashboard.module.css';
import AddAdForm from "./AddForm";
interface AdData {
    name: string;
    clicks: number;
    impressions: number;
    ctr?: number;
}

const AdDashboard: React.FC = () => {
    const [ads, setAds] = useState<AdData[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        fetchAds().then(data => {
            const dataWithCtr = data.map(ad => ({
                ...ad,
                ctr: ad.impressions > 0 ? Number(((ad.clicks / ad.impressions) * 100).toFixed(1)) : 0
            }));
            setAds(dataWithCtr);
        });
    }, []);

    const handleAdAdded = (newAd: AdData) => {
        setAds((prevAds) => [newAd, ...prevAds]);
    };

    const handleToggleAddForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return <>
        <div className={css.container}>
            <h2 className={css.title}>Advertisements Dashboard</h2>
            <p className={css.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className={css.chartWrapper}>
              <BarChart 
                width={800} 
                height={400} 
                data={ads} 
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                  <CartesianGrid strokeDasharray='3 3'/>
                  <XAxis dataKey='name' fontWeight={600}/>
                  <YAxis fontWeight={600} />
                  <Tooltip/>
                  <Legend />
                  <Bar dataKey='clicks' fill="#ff006e" activeBar={<Rectangle fill="#ff80be" stroke="#ff006e" strokeWidth={3}/>}/>
                  <Bar dataKey='impressions' fill="#f9c31a" activeBar={<Rectangle fill="#fce9bb" stroke="#f9c31a" strokeWidth={3}/>}/>
                  <Bar dataKey='ctr'fill="#53c654" barSize={20} activeBar={<Rectangle fill="#a9e2a9" stroke="#53c654" strokeWidth={3}/>}/>
              </BarChart>
            </div>
        </div>
        <div className={css.addContainer}>
            <div className={css.addBtn} onClick={handleToggleAddForm}>
               {isFormVisible ? 'Hide form' : 'Add Advert'}
            </div>
            {isFormVisible ? (<div className={css.addForm}>
              <AddAdForm onAdAdded={handleAdAdded} />
            </div>) : ''}
            
        </div>
    </>
};

export default AdDashboard;