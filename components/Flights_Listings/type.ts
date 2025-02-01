export interface TCabin {
    id: number;
    name: string;
    prices: {
        adult: number;
        children: number;
        infant: number;
    };
    amenities: string[];
    flight: number;
}

interface Airport {
    id: number;
    name: string;
    city: string;
    country: string;
    iata: string;
    scope: string;
    active: boolean;
    status: string;
    created_at: string;  
    updated_at: string;  
}

interface Airline {
    id: number;
    name: string;
    iata: string;
    country: string;
    active: boolean;
    status: string;
    logo: string;
    created_at: string;  
    updated_at: string;  
}

export interface TFlight {
    id: number;
    airline: Airline;
    destination: Airport;
    origin: Airport;
    cabin: TCabin[];
    trip_type: string;
    flight_number: string;
    departure_date: string;  
    arrival_date: string;  
    flight_duration: string; 
    return_date?: string;    
    created_at: string;      
    updated_at: string;      
}
