 module.exports = function (template,products){
    let output = template.replace('{{%IMAGE%}}' , products.productImage);
    output = output.replace('{{%NAME%}}' , products.name)
   output = output.replace('{{%MODELNAME%}}' , products.modeName)
   output = output.replace('{{%MODELNO%}}' , products.modelNumber)
   output = output.replace('{{%SIZE%}}' , products.size)
   output = output.replace('{{%CAMERA%}}' , products.camera)

   output = output.replace('{{%PRICE%}}' , products.price)

   output = output.replace('{{%COLOR%}}' , products.color)

   output = output.replace('{{%ID%}}' , products.id)
   output = output.replace('{{%ROM%}}' , products.ROM)
   output = output.replace('{{%DESC%}}' , products.Description)
    return output;
}