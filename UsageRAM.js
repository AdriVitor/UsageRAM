const { table } = require('console');
const os = require('os');

const {  arch, platform, totalmem, freemem } = os
const tRAM = totalmem()/1024 /1024;
const usage = freemem()/1024 /1024;
const percents = `${((usage / tRAM) * 100).toFixed(2)}`


    const stats = {
        SO: platform(),
        Mod: arch(),
        TotalRAM: `${parseInt(tRAM)} MB`,
        UsageRAM: `${parseInt(usage)} MB`,
        Porcentagem: `${percents} %`
    };
    
    console.table(stats);
    exports.stats = stats;

