- bert, bart, gpt, etc
- history: manually define multiple tasks like translation etc
	- help teach machines
- _distributional semantics_: words should be similar to their neighbors that occur frequently
	- "know a word by the company it keeps"
## Word2Vec
- pretrain word embeddings
- historically RNNs but nowadays use transformers
- data matters a lot - few hundreds of sentences not enough. need at least hundreds of thousands
- multiple heads (from last lecture) learn different things from random initialization
## Pre-training Whole Models
- pretrain: don't freeze any of the parameters
	- most computationally expensive
	- use a bunch of GPUs
- using the pretrain you freeze some(?)
- works because pre-trained model learns relatively good representation of the words
- academic scale: usually not enough data or power 
- basically learn prob distribution of the next word
- autoregressive decoder usually for next-word regression(?)
## Encoder Pre-train
- always do next word -> only teach word using previous words
	- encoders can teach before and after the word
- _masked_ language model: pretrain by replacing 1 word by a mask
	- want to be able to reconstruct data
	- update params to predict what the mask should be

## Pre-training and Fine-Tuning
- next word prediction: can use idea from mask and just make the mask the last token
- if you want the pre-trained model to be good on a specific task, need to fine tune with specific data
## BERT - Bi-Directional Encoder
- bi-directional: need to use the mask paradigm
- pre-train: mask 15% of tokens: (https://huggingface.co/docs/transformers/model_doc/bert)
	- Corrupts the inputs by using random masking, more precisely, during pretraining, a given percentage of tokens (usually 15%) is masked by:
		-  a special mask token with probability 0.8
		- a random token different from the one masked with probability 0.1
		- the same token with probability 0.1
- _next-sentence prediction (NSP)_ 
	- see what sentence after current sentence
	- has position embedding & token embedding
	- main diff from prev knowledge: 2 sentences worth of tokens
		- separated by \[SEP\] token
	- train on actual next sentence & other sentences for generalization
- how to use label for binary classification?
	- weights pulled from \[CLS\] token
- [\[CLS\] stands for classification. It is added at the beginning because the training tasks here is sentence classification. And because they need an input that can represent the meaning of the entire sentence, they introduce a new tag.](https://datascience.stackexchange.com/questions/66207/what-is-purpose-of-the-cls-token-and-why-is-its-encoding-output-important) 
- binary classification: can just tell it to guess yes or no for the last token
### Extensions of Bert
- lots of characteristics are empirical: many teams trying diff variations
- RoBERTa: try removing next-sentence prediction
	- actually ends up doing better
- SpanBERT: try masking words in a row, make pre-training harder
	- stronger pre-trained model
## Decoder-Only Pre-trained Models
### Generative Pre-trained Transformer (GPT)
- next-word prediction: given previous words, neural net learns to predict next word
- GPT-1 was pretty small, just 12 layers
- use byte-pair encoding
	- break word into subwords, can reuse subwords -> decrease vocabulary/dictionary size
- use same corpus as BERT: BooksCorpus
- classification: instead of prob distribution of last word, just get true/false
	- doesn't do as well as BERT for classification
- multiple choice: have to get diff question/answer pairs
### GPT-2 
- pretty much the same as GPT-1, trained more data
## Pre-trained Encoder-Decoder
- encoder learn rep of input to pass into decoder
- encoder: most powerful is the bidirectional
- decoder most powerful is next-token
- use masked LM to learn encoder, then teach decoder
