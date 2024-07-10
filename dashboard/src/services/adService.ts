
import axios from 'axios';

interface  AdData {
    name: string;
    clicks: number;
    impressions: number;
    ctr?: number;
}

export const fetchAds = async (): Promise<AdData[]> => {
    const response = await axios.get<AdData[]>('http://localhost:8080/api/ads');
    return response.data;
};

export const createAd = async (newAd: AdData): Promise<AdData> => {
    const response = await axios.post<AdData>('http://localhost:8080/api/ads', newAd);
    return response.data;
};