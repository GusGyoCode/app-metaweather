import cityInfo from '../../city.list.min.json'
export default function handler (req, res) {
  res.status(200).json(cityInfo)
}
