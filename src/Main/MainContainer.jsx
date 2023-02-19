import React,{useState} from 'react';
import Card from '../Card/Card.jsx';
import Button from './button.jsx';
import CardInfo from './CardInfo.jsx';
import "./MainContainer.css"
const MainContainer = () => {
    //Set to true which is monthly
let [cashSwitch,setCashSwitch]=useState(true)

function switchCash(){
    setCashSwitch(prev=>!prev)
}
    return (
        <main>
            <Button cashHandle={switchCash} cashSwitch={cashSwitch}/>
            <div className='card-flex'>
                <Card className={"white"} >
                <CardInfo title={"Basic"} money={cashSwitch? "19.99" : "199.99"} storage={"500 GB Storage"} users={"2 Users Allowed"} send={"Send up to 3 GB"}  />
                </Card>

                <Card  className={"blue"}>
                <CardInfo title={"Professional"} money={cashSwitch? "24.99" : "249.99"} storage={"1 TB Storage"} users={"5 Users Allowed"} send={"Send up to 10 GB"}  />
                </Card>

                <Card className={"white"} >
                <CardInfo title={" Master"} money={ cashSwitch?"39.99" : "399.99"} storage={"2 TB Storage"} users={"10 Users Allowed"} send={"Send up to 20 GB"}  />
                </Card>
            </div>
        </main>
    );
}

export default MainContainer;
