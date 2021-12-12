const { User, Thought, Reaction } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .thens(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: 'No thought found with this id'});
                return;
            }
        })
    }
}