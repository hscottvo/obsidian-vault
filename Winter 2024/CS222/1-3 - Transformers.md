## Attention
- create vector from words, then do transformations on vectors
- use rnn to get weights for the tokens
	- $n^{th}$ token has info from previous token (since rnn)
	- exploding problem: more tokens hard for encoder rnn
		- attention develop to overcome bottleneck problem
### Sequence-to-Sequence Learning
- want to encode the input, use the context to generate the next token
- attention intuition: instead of using a vector to pass into decoder, learn the attention weights to multiply by each of the vectors
	- how to combine each to the words with weights to create new representation
 - "students opened their" -> books
	 - probably look at students & opened
		 - higher attention weights for mroe important words
### Helping with Information Bottleneck
- attention weights learned from the data
### Additive Attention
- how the weights are computed?
- combine input vectors from encoding
- have to know the current word that i want to encode
- weight is function of encoder and decoder
- il and he problem: have to know that we have il and want he
- diff functions for weights
- sum of weights = 1
### Score Functions
- scalar to see how close the encoder and decoder vectors are
	- all pairwise scores add up to 1 (needs to be prob distribution)
- can learn shallow MLP on it
	- end up being too many parameters - more powerful but need a lot more computing power

## Transformers
- from "Attention Is All You Need"

### Self Attention
- can we just compute any pair of vectors in the representation and learn them all together?
- compute attention over all pairs of tokens
- input: "he likes school" token each word
	- attention: instead of getting looking at prev and next, each word looks at all others
- Scale: with deep learning try to stack things
	- transformers have stacks of encoders & decoders
		- basically list of attentions (self-attention in each encoder/decoder block)
	- encoder feed forward: get attentions and transform to vector to feed into next encoder
- attention want to get representation to know how position affects what word refers to what
	- self-attention gets alignments of neighboring words
#### Step 1 - Query, Key, Value
- query key and value just 3 vectors
- embedding from a word. then self-attention converts to 3 vectors
	- 3 matrices associated with each word
- 2 words: want to learn the interaction between the 2 words
	- dot product between query & key that gives scalar value 
	- get $q_1 \cdot k_1$ and compare ti $q_1 \cdot k_2$ 
	- scale down (no theoretical reason, just empircal end up getting nicer gradient)
	- softmax to 1: norm all scores to be pos and add to 1
	- self-to-self is usually higher: end up being "take context of self a lot but don't forget about other words"
	- cross with corresponding values from what the key was from, then sum together
### Positional Encoding
- in self attention, look at all words -> lose how words are ordered
- compute local window for encoding(?)
### Residuals for Self-Attention
- want to preserve some information from previous layer of processing rather than wiping it
	- use residuals to pass information

## Standard Enc-Dec
- word embedding ot pass into encoders
- gts passsed into every decoder block
- encoder layer_norm: normalize so gradient flows better
- decoder masked self-attention
	- mask future tokens so we don't attend on things we haven't predicted yet

### Recent
- multiple self-attention very expensive: ppl tryying to get sparse attentions to see if they do well
- diff attention methods:
	1. use anchor words
	2. slideing window
	3. random
	4. fully connected
