let items = [];
let id = 1;

exports.getAllItems = (req, res) => {
  res.json({
    status: "success",
    data: items
  });
};

exports.getItemById = (req, res) => {
  const item = items.find(i => i.id == req.params.id);

  if (!item) {
    return res.status(404).json({
      status: "error",
      message: "Item tidak ditemukan"
    });
  }

  res.json({ status: "success", data: item });
};

exports.createItem = (req, res) => {
  const newItem = {
    id: id++,
    ...req.body
  };

  items.push(newItem);

  res.status(201).json({
    status: "success",
    data: newItem
  });
};

exports.updateItem = (req, res) => {
  const item = items.find(i => i.id == req.params.id);

  if (!item) {
    return res.status(404).json({
      status: "error",
      message: "Item tidak ditemukan"
    });
  }

  Object.assign(item, req.body);

  res.json({ status: "success", data: item });
};

exports.deleteItem = (req, res) => {
  items = items.filter(i => i.id != req.params.id);

  res.json({
    status: "success",
    message: "Item berhasil dihapus"
  });
};