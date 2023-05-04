import React from "react";
import ReactDOM from 'react-dom/client';


class Overview extends React.Component {
    render() {
        return (
            <div>
                <div className="list-container">
                    {this.props.list.map((listItem) => {
                            return <div key={listItem.id}>{listItem.index}. {listItem.text}</div>   
                        }
                    )}
                </div>
                
            </div>
        )
    }
}

export { Overview }