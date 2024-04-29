## Instruction Tuning
- after fine-tuning the models, models might not understand instructions, jsut try to finish sentences
	- interprets it as a paraphrasing task
- basically collection of fine-tuning with the prompt
### Review - Pre-training/fine-tuning on a single task
- 2 objectives: mask modeling and next-word prediction
	- self-supervised, don't need labels
- fine-tune like translation: need labels
	- not as much data (but 500k vs 200mil) as pre-training
	- Why fine-tune on multiple? try to train on general/multiple tasks
### Instruction Fine-Tuning
- get collection of _instruction -> output_ across tasks to fine-tune LM
	- instruction actually has instruction + input
	- take input, and add instruction to tell it what to learn
 - actual pre-training starting to have fine-tuning included as well
	 - need way more supervised pairs
	 - train for multiple tasks
- pretty much more params -> better performance
- expensive to collect ground-truth data
- have to try to match LM's objective with human uses
#### Benchmarks for Multi-task LMs
- test on different things now that you can train the tasks themselves
- don't need to just test on translation

### Optimizing for Human Preferences
- maximize to human preference
	- gradient ascent
	- human preference metric not differentiable
		- thumbs up vs down can't really show what direction
## In-Context Learning
- learning doesn't happen in the parameter updates
	- more in query understanding
- 