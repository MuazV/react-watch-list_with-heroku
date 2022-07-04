import React, { useState, useEffect } from 'react'
import AddTutorial from '../components/AddTutorials'
import TutorialList from '../components/TutorialList';
import axios from 'axios';

const Home = () => {
    const [tutorials, setTutorials] = useState();
    
    const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

    //! GET (Read)
    const getTutorials = async() => {
        try {
        const {data} = await axios.get(url)
        setTutorials(data);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTutorials()
    }, [])



  return (
    <div>
        <AddTutorial/>
        <TutorialList tutorials = {tutorials}/>
    </div>
  )
}

export default Home;