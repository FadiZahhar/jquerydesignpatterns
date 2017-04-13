/*
the Constructor Function and the prototype that will describe our Composite Collection Object:

The ValuesComposite() constructor function in our example is quite simple. When invoked with the new operator, 
it returns an empty object with a length property equal to zero, representing that the collection it wraps is empty.

*/
function ValuesComposite() {
    this.length = 0;
}


/*

We first need to define a way that will enable us to populate our composite collection objects. 
We defined the append method that checks whether the provided parameter is one of the types that it can handle; in this case, 
it appends the parameter on the Composite Object on the next available numeric property and increments the length property value. 
For example, the first appended item, whether it is an object with a value property or a plain number, 
will be exposed to the "0" property of the Composite Object and will be accessible with the Bracket Property Accessor's syntax as myValuesComposition[0].

*/

ValuesComposite.prototype.append = function(item) {
    if ((typeof item === 'object' && 'value' in item) ||
        typeof item === 'number') {
        this[this.length] = item;
        this.length++;
    }

    return this;
};

/*

The increment method is presented as a simple example method that can manipulate such collections by operating over all the collection items. 
It accepts a numeric value as a parameter and then appropriately handles it by adding it to each item of our collection, based on their type. 
Since our composite is an Array-like object, increment uses a for loop to iterate over all the collection items and either increases the item.
value (in case the item is an object) or the actual numeric value stored (when the collection item stored is a number). 

In the same manner, we can continue and implement other methods that will, for example, enable us to multiply the collection items with a specific number.
In order to allow chaining the methods of our Composite Object, all the methods of the prototype need to return a reference to the instance of the object. 
We achieve this goal by simply adding a return this; statement as the last line for all the methods that manipulate the collection, such as append and increment.
Keep in mind that methods such as getValues that do not manipulate the collection but are used to return a result, 
by definition, can't be chained to relay the collection object instance to subsequent method calls.

*/

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

/*

Finally, we implement the getValues method as a convenient way to retrieve the actual numeric values of all the items in our collection. 
Similar to the increment method, the getValues method abstracts away the handling between the different item types of our collection. 
It iterates over the collection items, extracts each numeric value, and appends them to a result array that it returns to its caller.

*/

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


/*
actual example that will use the Composite Object we
just implemented:
*/
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


/*

Alternative implementations
Keep in mind that a Composite does not need to be an Array-like object, but is commonly preferred since JavaScript makes it easy to create such an implementation. 
Additionally, Array-like implementations also have the benefit of allowing us to iterate over the collection items using a simple for loop.
On the other hand, in case an Array-like object is not preferred, we can easily
use a property on the Composite Object to hold our collection items. For example, this property can be named as items and be used to store and access the items
of the collection inside our methods using this.items.push(item) and
this.items[i], respectively.

*/