export function MouseClicker() {
  function handleButtonClick(evt) {
    console.log(evt.target.name)
  }

  function handleClickImg(evt) {
    console.log(evt.target.src); // usando target e cliccando sull'immagine attivo solo l'attributo del nodo cliccato, quindi src di img.

  }
  return (
    <button name="One" onClick={handleButtonClick}>
      {" "}
      Click me
      <img onClick={handleClickImg}
        src="https://fastly.picsum.photos/id/122/200/200.jpg?hmac=AO77fWXJ61xiBlRhsCVFnWdzhJoxbrUP8288wd3Wdmg"
        alt=""
        width={30}
        height={30}
      />
    </button>
  );

}




/* Add an image inside the button and add an 
onClick event handler to it that prints the src of the image to the console.
How can you prevent the name attribute of the button from
being printed to the console when the image is clicked? */