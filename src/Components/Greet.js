import React from 'react';

function Greet() {
  let timeOfDayColor;
  const dateTime = new Date();
  const hours = dateTime.getHours();
  let timeOfDay;
  if (hours < 2 || hours > 17) {
    timeOfDay = 'Evening';
    timeOfDayColor = 'purple';
  } else if (hours > 12) {
    timeOfDay = 'Afternoon';
    timeOfDayColor = 'yellow';
  } else {
    timeOfDay = 'Morning';
    timeOfDayColor = 'turquoise';
  }
  const timeOfDayStyle = {
    color: timeOfDayColor,
  };
  return (
    <div className='greetingContainer'>

      <h1>Welcome To Our Website ...From MK KNIGHT </h1>
      <h2>
        Good <span style={timeOfDayStyle}>{timeOfDay}</span>
      </h2>
      
    <input type="file" id="photo"></input>
    <image id="image"> </image>
    <button onClick="uploadimage()"> Upload image</button>

    </div>
  );
}

export default Greet;
