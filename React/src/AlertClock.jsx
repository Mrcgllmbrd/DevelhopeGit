
export function AlertClock ({onButtonClick}) {
    return (
      <button onClick={onButtonClick}>
        Click me for the current time!
      </button>
    );

}

/* Create an AlertClock function component that renders a button.
 When the button is clicked, an alert should be shown with the current time. 
 Render the AlertClock component within the App component. 
 Make it so that the event handler is received as a prop by the AlertClock component,
  instead of being implemented within the component itself. 
Tip: use the Date object to get the current time. */