Blockly.Blocks['getargument'] = {
    init: function() {
        this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField("getArgumentOf");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['putanswer'] = {
    init: function() {
        this.appendValueInput("ANS")
            .setCheck(null)
            .appendField("putAnswer");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['getargument'] = function(block) {
    var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "arguments[" + value_num + "]";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['putanswer'] = function(block) {
    var value_ans = Blockly.JavaScript.valueToCode(block, 'ANS', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "answerList.push(" + value_ans + ");";
    return code;
};

function generateCode() {

}