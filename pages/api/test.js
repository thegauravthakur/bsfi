import Bed from "../../models/Bed";
import dbConnect from "../../utils/dbConnect";

export default async (req, res) => {
  await dbConnect();
  const data = {
    name: "gaurav",
    description: "sample description",
    type: "simple",
    image_url: "image url here",
  };
  const newBed = new Bed(data);
  newBed.save((err, doc) => {
    if (err) res.send(err);
    res.send("document created successfully", doc);
  });
};
