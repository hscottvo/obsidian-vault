## Proteins
- can think of as a linear structure
	- in reality, in dimensional space
	- can think of as a string of letters (amino acids)
### Amino Acids
- amino acids _alpha carbon_ used to set coordinates
- can link amino acids to each other
- main difference between amino acids: the side chain (R)
	- R: residual(?)
- _20_ different amino acids, backbone is the same
	- side chains can be simple or complex
#### Classification
- many are actually very similar
- categorized by somehting-electric
- diff sizes
- need to quantify the level of similarity between amino acids
	- replacing an amino acid with a very similar one might not be that big of a deal
### Back to Proteins
- primary structure is purely text
- secondary $\alpha$ helices and $\beta$ sheets are located on them
- tertiary just how they fold
	- function determined by the underlying folding/structure
		- very different amino acids -> can still manage to get same function if structured very similarly
	- bind to hormone/cell wall/antigen etc
- long time, going from primary to tertiary was very hard
	- computer get text, output 3d structure
	- LLMs and DL make it really easy to predict
- transcription factor: special protein that binds to DNA
## Protein Folding
- c-$\alpha$ is the basis of the chain
- between 2 c-$\alpha$'s: actually no torsion angles within a single amino acid
	- planes, then c-$\alpha$'s are the hinges
- with $n$-length chain, have $2n$ angles to predict
	- very big search space: avg $300$ length chains
- can go between angles and xyz's
## Ramachandran Plot
- white regions on the plot are not allowed
	- diff for diff amino acids
- can't fold too much, otherwise it'll hit the side chains etc
	- more for smaller amino acids, less for bigger amino acids
## Alpha Helix
- very structurally solid/strong
- handed is which way it rotates
- strong bc hydrogen bonds between hydrogens and oxygens along the helix
- Exactly $3.6$ residuals (side chains) per rotation
## Beta Sheet
- hydrogen-to-oxygen bonds between sheets this time
## 4 Questions
- Structure Prediction
- Alpha-Beta
- Binding