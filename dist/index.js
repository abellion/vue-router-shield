function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
$parcel$export(module.exports, "BeforeEach", () => $a640232d929af406$export$2e2bcd8739ae039);
$parcel$export(module.exports, "BeforeEnter", () => $5978d648ee7a50a8$export$2e2bcd8739ae039);
$parcel$export(module.exports, "BeforeUpdate", () => $920aba69e316dbe8$export$2e2bcd8739ae039);
class $c1242a822464b614$var$Guard {
    constructor(request, next){
        this.request = request;
        this.next = next;
    }
    /**
   * Handle the guards
   * @return mixed
   */ async handle() {
        const chain = this.chain();
        for (let guard of chain){
            const result = await this.run(guard);
            if (result !== undefined) return this.next(result);
        }
        return this.next();
    }
    /**
   * Run a guard
   * @param  function guard
   * @return promise
   */ run(guard) {
        return new Promise((resolve)=>{
            guard(this.request.to, this.request.from, resolve);
        });
    }
    /**
   * Build the guards chain
   * @return array
   */ chain() {
        const chain = new Set();
        for (let route of this.request.to.matched)if (route.meta.hasOwnProperty('guard')) route.meta.guard.forEach(Set.prototype.add, chain);
        return Array.from(chain);
    }
}
var $c1242a822464b614$export$2e2bcd8739ae039 = (to, from, next)=>{
    new $c1242a822464b614$var$Guard({
        to: to,
        from: from
    }, next).handle();
};


var $a640232d929af406$export$2e2bcd8739ae039 = (guard)=>{
    return (to, from, next)=>{
        guard(to, from, next);
    };
};


var $5978d648ee7a50a8$export$2e2bcd8739ae039 = (guard)=>{
    let last = null;
    const wrapper = (to, from, next)=>{
        let skip = false;
        if (last && last.from.path === from.path && last.to.path !== to.path) skip = true;
        if (skip) last = null;
        else last = {
            to: to,
            from: from
        };
        if (skip) return next();
        for(let index in from.matched){
            if (from.matched[index].meta.hasOwnProperty('guard') && from.matched[index].meta.guard.includes(wrapper) && from.matched[index] === to.matched[index]) return next();
        }
        guard(to, from, next);
    };
    return wrapper;
};


var $920aba69e316dbe8$export$2e2bcd8739ae039 = (guard)=>{
    const wrapper = (to, from, next)=>{
        for(let index in from.matched){
            if (from.matched[index].meta.hasOwnProperty('guard') && from.matched[index].meta.guard.includes(wrapper) && from.matched[index] === to.matched[index]) return guard(to, from, next);
        }
        next();
    };
    return wrapper;
};


function $4fa36e821943b400$export$2e2bcd8739ae039(vue, options) {
    if (Boolean(options) !== true || options.hasOwnProperty('router') !== true) throw new Error('A Vue Router instance must be given to vue-router-shield');
    options.router.beforeEach($c1242a822464b614$export$2e2bcd8739ae039);
}


//# sourceMappingURL=index.js.map
