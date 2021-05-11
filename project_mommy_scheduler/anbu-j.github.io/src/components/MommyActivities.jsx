
import React, { Component } from 'react';
import activities from '../data/activitiesdata';

class MommyActivities extends Component {
    constructor(props){
        super(props)
        this.state={
           activity:activities,
           isSelected:false,
           isMandatory:false,
           isDailyTask:false,
           name:"",
           priority:'',
           duration:''
        }
    }
    render() {
        return (
            <div>
            <div>
                <h1> Identify Activities and Prioritize </h1> 
            </div>
            <div>
                
            </div>
            <div className="printActivities">
            <label className="labels">
                    <p> </p>
                    <p>Acitvity</p>
                    <p>Duration</p>
                    <p>Daily/Weekly</p>
                    <p>Mandatory</p>
                </label>
                    {this.state.activity.map((itemInTheList,i)=>{
                    return (<label className="labels">
                    <input
                        name="isAct"
                        type="checkbox"
                    > 
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.duration}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isDailyTask}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isMandatory}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.priority}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isSelected }>
                    </input>
                </label>)
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
        </div>
        );
    }
}

export default MommyActivities;