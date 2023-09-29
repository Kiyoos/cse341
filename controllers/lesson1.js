const brandyRoute = (req, res) => {
  res.send('Brandy Stinson');
};

const allanRoute = (req, res) => {
  res.send('Awesome Allan');
};

const jeffRoute = (req, res) => {
  res.send('Jeff Stinson');
};

module.exports = {
  brandyRoute,
  allanRoute,
  jeffRoute
};
