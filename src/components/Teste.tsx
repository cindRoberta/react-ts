import React, { useState, useEffect } from "react";

const Teste = () => {
  const [showHiddenPassword, setShowHiddenPassword] = React.useState(false);

  const handleToggle = () => setShowHiddenPassword(!showHiddenPassword);

  // Gets called on mount and any time
  // `showHiddenPassword` gets updated
  React.useEffect(() => {
    console.log(showHiddenPassword)
  }, [showHiddenPassword]);

  return (
    <>
      <input type={showHiddenPassword ? "text" : "password"} />
      <button onClick={handleToggle}>Toggle hidden password</button>
    </>
  );
};

export default Teste;