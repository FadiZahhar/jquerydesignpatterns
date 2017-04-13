function ValuesComposite() {
    this.length = 0;
}

ValuesComposite.prototype.append = function(item) {
    if ((typeof item === 'object' && 'value' in item) ||
        typeof item === 'number') {
        this[this.length] = item;
        this.length++;
    }

    return this;
};

ValuesComposite.prototype.increment = function(number) {
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (typeof item === 'object' && 'value' in item) {
            item.value += number;
        } else if (typeof item === 'number') {
            this[i] += number;
        }
    }

    return this;
};

ValuesComposite.prototype.getValues = function() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (typeof item === 'object' && 'value' in item) {
            result.push(item.value);
        } else if (typeof item === 'number') {
            result.push(item);
        }
    }
    return result;
};


var numberValues = [2, 5, 8];

var objectsWithValues = [
    { value: 7 },
    { value: 4 },
    { value: 6 },
    { value: 9 }
];

var valuesComposition = new ValuesComposite();

for (var i = 0; i < numberValues.length; i++) {
    valuesComposition.append(numberValues[i]);
}

for (var i = 0; i < objectsWithValues.length; i++) {
    valuesComposition.append(objectsWithValues[i]);
}

valuesComposition.increment(2)
    .append(1)
    .append(2)
    .append({ value: 3 });

console.log(valuesComposition.getValues());
