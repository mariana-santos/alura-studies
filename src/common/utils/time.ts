export function tempoParaSeg (tempo: String){
    const [h = '0', min = '0', s = '0'] = tempo.split(':')

    const horasEmSeg = Number(h) * 3600
    const minEmSeg = Number(min) * 60

    return horasEmSeg + minEmSeg + Number(s)
}