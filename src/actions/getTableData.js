import { buildUrl, get } from "./apiServices";

//GET data by symbol 

export const getDataBySymbol = async(searchSymbol) => {
    const url = buildUrl(`query?function=SYMBOL_SEARCH&keywords=${searchSymbol}&apikey=UBOB63ZQCT15M41X`)
    return await get(url);
}

// TIME_SERIES_DAILY_ADJUSTED
export const gettimeSeriesBySymbol = async(id) => {
    const url = buildUrl(`query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${id}&apikey=UBOB63ZQCT15M41X`)
    return await get(url);
}

// export const gettimeSeriesBySymbol = async() => {
//     const url = buildUrl(`query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=UBOB63ZQCT15M41X`)

//     const series = await get(url);
//     const data = series;
//     console.log(data['Time Series (Daily)'])
//     return data.map((oreder)=>  {
//         if (series != null) {
//         const { timeSeriesDaily,open, high,low, close, adjustedClose, volume,dividendAmount,splitCoefficient} = oreder
//         return {
          
//             ['Time Series (Daily)']: timeSeriesDaily,
//             ['1. open']: open,
//             ['2. high']: high,
//             ['3. low']: low,
//             ['4. close']: close,
//             ['5. adjusted close"']: adjustedClose,
//             ['6. volume']:volume,
//             ['7. dividend amount']:dividendAmount,
//             ['8. split coefficient']: splitCoefficient
//                    }
//     }
//     })
// }