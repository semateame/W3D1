"use strict";
/* global Stack */

class SymbolBalancer {
    constructor(text) {
        this.text = text;
        this.stack = new Stack();
    }

    isBalanced(delimters) {
       let check;
        for (let i = 0; i < delimters.length; i++) {
            if (delimters[i] == "{" || delimters[i] == "("  || delimters[i] == "[") {
                this.stack.storage.push(delimters[i]);
            }
            else if (delimters[i] == "}" || delimters[i] == ")" || delimters[i] == "]") {
                check = this.stack.storage.pop();

                if (!((check == "{" && delimters[i] == "}") || (check == "(" && delimters[i] == ")")
                 || (check == "[" && delimters[i] == "]"))) {
                    return false;
                }
            }
        }

        if (this.stack.size() === 0) {
            return true;
        }
        else {
            return false;
        }

        

    }

}
