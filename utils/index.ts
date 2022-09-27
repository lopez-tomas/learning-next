const capitalizeFirstLetter = (string: string) => string == 'unknown' ? string.charAt(0).toUpperCase() + string.slice(1) : string;

const statusColor = (status: string) => status == 'Alive' ? '#55cc44' : status == 'Dead' ? '#d63d2e' : 'yellow';

export {
  capitalizeFirstLetter,
  statusColor
}
