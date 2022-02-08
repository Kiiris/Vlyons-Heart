-- settings.sql
DROP DATABASE vlyons;
CREATE DATABASE vlyons;
CREATE USER vlyonuser WITH PASSWORD 'vlyons';
GRANT ALL PRIVILEGES ON DATABASE vlyons TO vlyonuser;