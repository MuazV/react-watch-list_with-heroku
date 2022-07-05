import React, {useState, useEffect} from 'react';
import AddTutorials from '../components/AddTutorials';
import TutorialList from '../components/TutorialList';
import axios from 'axios';


const Home = () => {
    const [tutorials, setTutorials] = useState()

    const url = "https://cw-axios-example.herokuapp.com/api/tutorials"

    //Get işlemi
const getTutorials = async() => {
    try {
        const {data} = await axios.get(url)
    setTutorials(data)
    } catch (error) {
        console.log(error);
    }
}

//Post işlemi
const addTutorial = async(tutorial) => {
  
    try {
          await axios.post(url, tutorial)
    } catch (error) {
        console.log(error);
    }

}

useEffect(() => {
  getTutorials()
}, [])


  return (
    <div className='container'>
        <AddTutorials addTutorial = {addTutorial}/>
        <TutorialList tutorials={tutorials}/>
    </div>
  )
}

export default Home