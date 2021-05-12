
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
    statusUnSelected(itemInTheList,i){
        let currArray = this.state.activity
        let newVal = currArray[i]
        newVal.isSelected = false
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
    }    
    statusSelected(itemInTheList,i) {
        let currArray = this.state.activity
        let newVal = currArray[i]
        newVal.isSelected = true
        currArray[i] =newVal
        this.setState(
            {
                currArray
            }
        )
    
    }     
    render() {
        return (
            <div>
                <div>
                    <h1> Identify Activities and Prioritize </h1> 
                </div>

                <div className="printActivities">
                    <div className="printNonActivities">
                        <h3> Identify Activities</h3>
                        <label className="labels">
                        <p> &nbsp;&nbsp;&nbsp;</p>
                        <input
                            className="labelHeader"
                            type="textbox"
                            readOnly={true}
                            value="Activity">
                        </input>
                        <input
                            className="labelHeader"
                            type="textbox"
                            readOnly={true}
                            value="Duration (In Hrs)">
                        </input>
                        <input
                            className="labelHeader"
                            type="textbox"
                            readOnly={true}
                            value="Daily task">
                        </input>
                        <input
                            className="labelHeader"
                            type="textbox"
                            readOnly={true}
                            value="Mandatory">
                        </input>
                        <input
                            className="labelHeader"
                            type="textbox"
                            readOnly={true}
                            value="Priority">
                        </input>
                    </label>
                        {this.state.activity.map((itemInTheList,i)=>{
                        return itemInTheList.isSelected? '':(<label className="labels">
                        <input
                            name="isAct"
                            type="checkbox"
                            onChange={()=>this.statusSelected(itemInTheList,i)}
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
                    </label>)
                        
                        //itemInTheList.name, itemInTheList. ;
                        
                        }
                        )

                        }
                    </div>
                    <div className="printSelActivities">
                    <h3> Selected Activities</h3>
                    <label className="labels">
                    <p> &nbsp;&nbsp;&nbsp;</p>
                    <input
                        className="labelHeader"
                        type="textbox"
                        readOnly={true}
                        value="Activity">
                    </input>
                    <input
                        className="labelHeader"
                        type="textbox"
                        readOnly={true}
                        value="Duration (In Hrs)">
                    </input>
                    <input
                        className="labelHeader"
                        type="textbox"
                        readOnly={true}
                        value="Daily task">
                    </input>
                    <input
                        className="labelHeader"
                        type="textbox"
                        readOnly={true}
                        value="Mandatory">
                    </input>
                    <input
                        className="labelHeader"
                        type="textbox"
                        readOnly={true}
                        value="Priority">
                    </input>
                </label>
                    {this.state.activity.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? (<label className="labels">
                    <input
                        name="isAct"
                        type="checkbox"
                        checked={true}
                        onChange={()=>this.statusUnSelected(itemInTheList,i)}
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
                </label>):''
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
                </div>
            
            </div>
        );
    }
}

export default MommyActivities;