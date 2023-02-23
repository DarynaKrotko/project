import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDdiNGZlMjY2MzY4MzhiYjEyZTNkODA4NThjYTg1MCIsInN1YiI6IjYzZWY5ZGU2Y2RkYmJjMDBkNWU1MDBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sLmuT4RnBcHKu7gcEyxR39xkT-faM_EzEysQkUsY7go`
    return config
})

export {axiosService};