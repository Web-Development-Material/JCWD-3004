function isAnagram(chr, tar) {
    
    const mainChar = chr.split('').sort().join(''),
    targetChar = tar.split('').sort().join('');

    return mainChar === targetChar;
}

console.log(
    "anagram target nagaram ->",
    isAnagram("anagram", "nagaram")
);
console.log(
    "rat target car ->",
    isAnagram("rat", "car")
);
console.log(
    "kita target ikat ->",
    isAnagram("kita", "ikat")
);