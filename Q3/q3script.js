function analyzeText() {
    const text = document.getElementById('textInput').value;
    if (!text) {
        alert("Please enter some text.");
        return;
    }

    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const spaces = (text.match(/\s/g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^a-zA-Z\s\n]/g) || []).length;

    document.getElementById('statsResult').innerHTML = `
        Letters: ${letters}<br>
        Words: ${words}<br>
        Spaces: ${spaces}<br>
        Newlines: ${newlines}<br>
        Special Symbols: ${specialSymbols}
    `;

    const tokens = text.toLowerCase() 
        .replace(/[^a-z\s]/g, '')
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);
    console.log("Raw text:", text);
    console.log("Tokenized words:", tokens);

    const pronouns = {
        'i': 0, 'me': 0, 'mine': 0, 'my': 0, 'myself': 0,
        'you': 0, 'your': 0, 'yours': 0, 'yourself': 0, 'yourselves': 0,
        'he': 0, 'him': 0, 'his': 0, 'himself': 0,
        'she': 0, 'her': 0, 'hers': 0, 'herself': 0,
        'it': 0, 'its': 0, 'itself': 0,
        'we': 0, 'us': 0, 'our': 0, 'ours': 0, 'ourselves': 0,
        'they': 0, 'them': 0, 'their': 0, 'theirs': 0, 'themselves': 0,
        'this': 0, 'that': 0, 'these': 0, 'those': 0,
        'who': 0, 'whom': 0, 'whose': 0, 'what': 0, 'which': 0,
        'another': 0, 'anybody': 0, 'anyone': 0, 'anything': 0,
        'each': 0, 'either': 0, 'everybody': 0, 'everyone': 0, 'everything': 0,
        'little': 0, 'much': 0, 'neither': 0, 'nobody': 0, 'no one': 0, 'nothing': 0,
        'one': 0, 'other': 0, 'somebody': 0, 'someone': 0, 'something': 0,
        'both': 0, 'few': 0, 'many': 0, 'others': 0, 'several': 0,
        'all': 0, 'any': 0, 'more': 0, 'most': 0, 'none': 0, 'some': 0, 'such': 0,
        'each other': 0, 'one another': 0
    };
    tokens.forEach(word => {
        if (pronouns.hasOwnProperty(word)) pronouns[word]++;
    });
    console.log("Pronoun counts:", pronouns);
    document.getElementById('pronounsResult').innerHTML = `
        Pronouns Count:<br>${Object.entries(pronouns)
            .filter(([_, count]) => count > 0)
            .map(([pronoun, count]) => `${pronoun}: ${count}`)
            .join('<br>') || 'No pronouns found'}
    `;

    const prepositions = {
        'about': 0, 'above': 0, 'across': 0, 'after': 0, 'against': 0,
        'along': 0, 'among': 0, 'around': 0, 'at': 0, 'before': 0,
        'behind': 0, 'below': 0, 'beneath': 0, 'beside': 0, 'besides': 0,
        'between': 0, 'beyond': 0, 'by': 0, 'concerning': 0, 'considering': 0,
        'despite': 0, 'down': 0, 'during': 0, 'except': 0, 'for': 0,
        'from': 0, 'in': 0, 'inside': 0, 'into': 0, 'like': 0,
        'near': 0, 'of': 0, 'off': 0, 'on': 0, 'onto': 0,
        'out': 0, 'outside': 0, 'over': 0, 'past': 0, 'regarding': 0,
        'since': 0, 'through': 0, 'throughout': 0, 'till': 0, 'to': 0,
        'toward': 0, 'under': 0, 'underneath': 0, 'until': 0, 'up': 0,
        'upon': 0, 'with': 0, 'within': 0, 'without': 0,
        'according to': 0, 'ahead of': 0, 'apart from': 0, 'as for': 0,
        'as of': 0, 'as per': 0, 'as to': 0, 'as well as': 0,
        'because of': 0, 'by means of': 0, 'close to': 0, 'due to': 0,
        'except for': 0, 'far from': 0, 'in addition to': 0, 'in case of': 0,
        'in front of': 0, 'in place of': 0, 'in spite of': 0, 'instead of': 0,
        'near to': 0, 'next to': 0, 'on account of': 0, 'on behalf of': 0,
        'on top of': 0, 'out of': 0, 'owing to': 0, 'prior to': 0,
        'such as': 0, 'thanks to': 0, 'up to': 0, 'with regard to': 0
    };
    tokens.forEach(word => {
        if (prepositions.hasOwnProperty(word)) prepositions[word]++;
    });
    console.log("Preposition counts:", prepositions);
    document.getElementById('prepositionsResult').innerHTML = `
        Prepositions Count:<br>${Object.entries(prepositions)
            .filter(([_, count]) => count > 0)
            .map(([prep, count]) => `${prep}: ${count}`)
            .join('<br>') || 'No prepositions found'}
    `;

    const articles = { 'a': 0, 'an': 0 };
    tokens.forEach(word => {
        if (articles.hasOwnProperty(word)) articles[word]++;
    });
    console.log("Article counts:", articles);
    document.getElementById('articlesResult').innerHTML = `
        Indefinite Articles Count:<br>${Object.entries(articles)
            .filter(([_, count]) => count > 0)
            .map(([article, count]) => `${article}: ${count}`)
            .join('<br>') || 'No articles found'}
    `;
}