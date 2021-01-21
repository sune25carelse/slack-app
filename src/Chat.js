import React from 'react';
import './Chat.css';
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';

function Chat() {
    const { roomId } = useParams();
  return (
    <div className="chat">
        <div className="chat__header">
            <div className="chat__headerLeft">
              <h4 className="chat__channelName">
                  <strong>#general</strong>
                  <StarBorderOutlined />
              </h4>
            </div>
            <div className="chat__headerRight">
              <p>
                <InfoOutlined /> Details
              </p>
            </div>
        </div>
    </div>
  );
}

export default Chat;
