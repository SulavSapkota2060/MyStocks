const indicator = (num) => {
  let color = null;
  if (Math.sign(num) === -1) {
    color = "rgb(252, 118, 164)";
  } else if (Math.sign(num) === 1) {
    color = "#48be85";
  } else {
    color = "rgb(233, 233, 49)";
  }

  return <p style={{ color: color }}>Rs. {num.toFixed(2)}</p>;
};

export { indicator };
