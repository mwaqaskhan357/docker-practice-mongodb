db = db.getSiblingDB('testing');
db.createUser({
  user: 'testing',
  pwd: 'testing',
  roles: [{ role: 'readWrite', db: 'testing' }],
});
