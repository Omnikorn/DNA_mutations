// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory =(num,DNArray)=>{
  return {
    specimenNum: num,
    dna: DNArray,
    mutate(){
      //create a random number
      rand = Math.floor(Math.random() * 15)

      //find the base in the array
oldBase=this.dna[rand]
console.log("the base chosen is " + oldBase) 

      //replace the base
 let newBase=returnRandBase()
  while (newBase === oldBase){
    newBase=returnRandBase()
  }
this.dna[rand] = newBase

    },
    compareDNA(sibling){
      //get the siblings DNA 
const siblingDNA = sibling.dna
      //create a counter of 15 set it to zero
      let counter = 0
      //loop through the DNA base of the curent creature compare each location at a time, if the dnas match increase counter by 1
      for (i=0; i<this.dna.length;i++){
        if(this.dna[i]===siblingDNA[i]){
          counter ++
        }
      } 
      // get final count and find percentage 
      const percentage=(counter/15)*100

      return (`specimen #${this.specimenNum} and specimen #${sibling.specimenNum} have ${percentage}% DNA in common.`)
    },
    willLikelySurvive(){
      //loop through dna and count c and g 
      let counter =0
      for(i=0;i<this.dna.length;i++){
        if(this.dna[i]==="C" || this.dna[i]==="G") {
          counter++
        }
      }
      // calculate percentage
      const percentage = (counter/15)*100
      // return true if above 60%
      if (percentage < 60){
        return true
      } else {return false}
    }
  }
}

//const fluffy = pAequorFactory(1,mockUpStrand())
//const scruffy = pAequorFactory(2,mockUpStrand())
//console.log(fluffy,scruffy)

//fluffy.mutate()
//console.log(fluffy)

//console.log(fluffy.compareDNA(scruffy))

//console.log(scruffy.willLikelySurvive())
//console.log(fluffy.willLikelySurvive())

const family = []
for (i=0;i<30;i++){
  family.push(pAequorFactory(i,mockUpStrand()))
}

console.log(family[7])