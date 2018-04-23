DROP TABLE IF EXISTS company,billing,subscribers;

CREATE TABLE IF NOT EXISTS company(
  co_id char(36) NOT NULL UNIQUE,
  co_corporateNumber INT NOT NULL,
  co_name varchar(64),
  co_telephone varchar(64),
  co_address varchar(200),
  co_postcode varchar(20),
  co_city varchar(100),
  PRIMARY KEY (co_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS billing (
  bi_id char(36) NOT NULL UNIQUE,
  bi_address varchar(200) DEFAULT NULL,
  bi_postcode varchar(20),
  bi_city varchar(200),
  co_id char(36) ,
  PRIMARY KEY (bi_id),
  FOREIGN KEY (co_id) REFERENCES company(co_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS subscribers(
  su_id char(36) NOT NULL UNIQUE,
  su_socialnumber varchar(10),
  su_firstname varchar(64),
  su_lastname varchar(64),
  su_address varchar(200),
  su_postcode varchar(20),
  su_city varchar(100),
  su_subscribtion_number INT,
  PRIMARY KEY (su_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

INSERT INTO company(co_id,co_corporateNumber,co_name,co_telephone,co_address, co_postcode,co_city) VALUES
('f64f2940-fae4-11e7-8c5f-ef356f279131',1294039445,'Bacon corp','071 877 64 23','Vägen 1','090 23', 'Umeå'),
('9125a8dc-52ee-365b-a5aa-81b0b3681cf6',1344531353,'Travellodge','074 348 34 12','Stigen 12', '071 23', 'Örsköldsvik'),
('c6235813-3ba4-3801-ae84-e0a6ebb7d138',2423450310,'Samsung', '074 745 23 45', 'Motorvägen 23', '09 124', 'Luleå' ),
('e8b5a51d-11c8-3310-a6ab-367563f20686',7493342385,'Cool Shit', '034 345 23 53', 'Skidspåret 4', '098 23', 'Kiruna');

INSERT INTO billing(bi_id,bi_address, bi_postcode,bi_city,co_id) VALUES
('416ac246-e7ac-49ff-93b4-f7e94d997e6b','Vägen 1','090 23','Umeå','f64f2940-fae4-11e7-8c5f-ef356f279131');

INSERT INTO subscribers(su_id,su_socialnumber,su_firstname,su_lastname,su_address,su_postcode,su_city,su_subscribtion_number) VALUES
('fdda765f-fc57-5604-a269-52a7df8164ec','9503040332','Johan','Larsson','Huset 45', '341 34','Stockholm',34),
('3bbcee75-cecc-5b56-8031-b6641c1ed1f1','9104069881','Magda','Hirsch','Balkongen 5','908 23','Ystad',213),
('630eb68f-e0fa-5ecc-887a-7c7a62614681','6501125567','My','Andersson','Terassen 8', '092 32','Bornholm',9);
