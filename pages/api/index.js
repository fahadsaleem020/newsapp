var faunadb = require("faunadb");
var { Paginate, Collection, Collections, Map, Index, Ref } = faunadb.query;
var client = new faunadb.Client({ secret: process.env.db_key });

module.exports = async (req, res) => {
  try {
    let response = await client.query(Paginate(Collections()));
    let data = await response.data;
    let arr = await data.map((val) => ({ collection: val.id }));
    res.status(200).json({ data: arr });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};
