DROP TABLE IF EXISTS company,billing,subscribers;

CREATE TABLE IF NOT EXISTS company(
  co_id INT NOT NULL AUTO_INCREMENT,
  co_corporateNumber INT NOT NULL,
  co_name varchar(64),
  co_telephone varchar(64),
  co_address varchar(200),
  co_postcode varchar(20),
  co_city varchar(100),
  PRIMARY KEY (co_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS billing (
  bi_id INT NOT NULL AUTO_INCREMENT,
  bi_address varchar(200) DEFAULT NULL,
  bi_postcode varchar(20),
  bi_city varchar(200),
  co_id INT,
  PRIMARY KEY (bi_id),
  FOREIGN KEY (co_id) REFERENCES company(co_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS subscribers(
  su_id INT NOT NULL AUTO_INCREMENT,
  su_socialnumber varchar(10),
  su_firstname varchar(64),
  su_lastname varchar(64),
  su_address varchar(200),
  su_postcode varchar(20),
  su_city varchar(100),
  su_subscribtion_number INT,
  PRIMARY KEY (su_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

INSERT INTO company(co_corporateNumber,co_name,co_telephone,co_address, co_postcode,co_city) VALUES
(1294039445,'Bacon corp','071 877 64 23','Vägen 1','090 23', 'Umeå'),
(1344531353,'Travellodge','074 348 34 12','Stigen 12', '071 23', 'Örsköldsvik'),
(2423450310,'Samsung', '074 745 23 45', 'Motorvägen 23', '09 124', 'Luleå' ),
(7493342385,'Cool Shit', '034 345 23 53', 'Skidspåret 4', '098 23', 'Kiruna');

INSERT INTO billing(bi_address, bi_postcode,bi_city,co_id) VALUES ('Vägen 1','090 23','Umeå',1);

INSERT INTO subscribers(su_socialnumber,su_firstname,su_lastname,su_address,su_postcode,su_city,su_subscribtion_number) VALUES
('9503040332','Johan','Larsson','Huset 45', '341 34','Stockholm',34),
('9104069881','Magda','Hirsch','Balkongen 5','908 23','Ystad',213),
('6501125567','My','Andersson','Terassen 8', '092 32','Bornholm',9);
