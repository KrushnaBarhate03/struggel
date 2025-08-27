import React from 'react'
import image from './assets/add.png'
import image1 from './assets/minus.png'
import { useState,useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';

function score() {
const [score, setScore] = useState(0);
    const [scoreA, setScoreA] = useState(0);
    useEffect(()=>{
      if(score>10  ){
        toast.success("Team A is Win");
      }
    },[score])

    useEffect(()=>{
        if(scoreA>10){
            toast.success("Team B is Win");
        }
    },[scoreA])
    
    return (
        <>
            <div className="   text-center text-2xl   text-blue-800  bg-blue-200  font-bold font-serif ">ScoreKepper
            </div>

            <div className="text-center flex flex-col md:flex-row gap-1  justify-around md:justify-around  bg-blue-200 min-h-screen">
                <div className="text-xl text-blue-500 font-bold font-serif w-50 rounded-xl h-50  bg-slate-50  border-b-4 m-20 border-amber-300   " >Team:1
                    <h3 className="border-t-4 border-amber-300"> {score}</h3>
                    <div className="flex justify-center py-12">
                        <img src={image1} onClick={() => { setScore(score -1 ) }} className="w-10 m-10" />
                        <img src={image} onClick={() => { setScore(score + 1) }} className="w-10 m-10" />
                    </div>
                </div>




                <div className="text-xl text-blue-500 font-bold font-serif rounded-xl w-50 h-50  bg-slate-50  border-b-4 m-20 border-amber-300  " >Team:2
                    <h3 className="border-t-4 border-amber-300">{scoreA}</h3>
                    <div className="flex justify-center py-12">
                        <img src={image1} onClick={() => { setScoreA(scoreA - 1)} } className="w-10 m-10" />
                        <img src={image} onClick={() => { setScoreA(scoreA + 1) }} className="w-10 m-10" />
                    </div>
                </div>
                <Toaster/>
            </div>


        </>
    )
}

export default score