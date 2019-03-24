module.exports = function check(str, bracketsConfig) {
  let stack = [];
    let found;
    let same;
    for(let i in str){
        found = false;
        same = false;
        if(stack.length == 0){
            stack.push(str[i]);
            continue;
        }
        for(let j in bracketsConfig){
            if(bracketsConfig[j][1] == str[i]){
            found = true;
            let index = stack.length - 1;
            if(bracketsConfig[j][1] == bracketsConfig[j][0]){
                same = true;
            }
                if(stack[index] == bracketsConfig[j][0]){
                    stack.pop();
                    same = false;
                    break;
                }
            }
        }
        if(found == false || same == true){
            stack.push(str[i]);
        }
    }
    if(stack.length == 0)
        return true;
    else
        return false;
}
