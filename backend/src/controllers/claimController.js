const Claim = require("../models/Claim");
const Deal = require("../models/Deal");
const User = require("../models/User");

exports.claimDeal = async (req, res) => {
  const deal = await Deal.findById(req.body.dealId);
  const user = await User.findById(req.userId);

  if (deal.locked && !user.isVerified) {
    return res
      .status(403)
      .json({ message: "Verification required" });
  }

  const claim = new Claim({
    userId: req.userId,
    dealId: deal._id,
  });

  await claim.save();

  res.json({ message: "Deal claimed" });
};

exports.getMyClaims = async (req, res) => {
  const claims = await Claim.find({ userId: req.userId })
    .populate("dealId");

  res.json(claims);
};
