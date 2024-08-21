export function capitalize(a) {
    // labas -> Labas
    // LABAS -> Labas
    // labas rytas -> Labas Rytas 
    // LABAS RYTAS -> Labas Rytas

    return a.split(' ')
    .map(w => w[0].toUpperCase() + w.slice(1)
    .toLowerCase())
    .join(' ');
}


