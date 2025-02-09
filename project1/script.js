const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
 panel.addEventListener('click', () => {
     
    removeActiveClasses()
    
    panel.classList.add('active');
  })

})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}
 
def binary_seach(list, item){
 low=0
 high=len(list)-1;

 while low <= high{
  mid=(low = high)/2
  guess=list[mid]
   if guess =item (
    return mid)
    if guess 

   }
 }