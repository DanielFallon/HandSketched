/**
 * Created by Daniel Fallon on 12/22/2016.
 */
/**
 * Secure object should be used when an object will have two interfaces
 * the expected usage of this interface is as follows:
 *  {private: pvtVar, public: pubVar} = new SecureObject
 */
class ProtectedObject {
    private static buildDescriptor(self: any, member:string, descriptor: PropertyDescriptor):PropertyDescriptor{
        let curDescriptor = Object.getOwnPropertyDescriptor(self, member);
        if(curDescriptor === undefined) return undefined;
        for(let val in descriptor){
            curDescriptor[val] = descriptor[val]
        }
        // We intentionally aren't going to allow setters to work on function values. That doesn't seem like desireable
        // behavior for most use cases, and this can be worked around easily
        if(curDescriptor.value !== undefined && typeof curDescriptor.value !== 'function'){
            curDescriptor.set = (value) => self[member] = value;
        }
        curDescriptor.value = undefined;
        curDescriptor.get = () => self[member];
        return curDescriptor;
    }
    public static buildDescriptors(self: any, descriptors: PropertyDescriptorMap):PropertyDescriptorMap{
        let outDescriptors;
        for(let member in descriptors){
            outDescriptors[member] =
                ProtectedObject.buildDescriptor(self, member, descriptors[member])
        }
        return outDescriptors;
    }
    constructor(descriptors: PropertyDescriptorMap){
        Object.defineProperties(this, descriptors);
        Object.seal(this);
        Object.freeze(this);
    };
}
Object.freeze(ProtectedObject);
Object.seal(ProtectedObject);

export = ProtectedObject;