function uniteUnique(...arr) {
  return arr.reduce(function(all,item){
      return all.concat(item).filter(function(el,index,self){
          return index == self.indexOf(el);
      });
  });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);