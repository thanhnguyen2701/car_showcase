export async function fetchCars() {
    const headers= {
            'x-rapidapi-key': '2fcb3bf26amsh3959ef38cf1db7ep166c3fjsn279382b71f7e',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;


}