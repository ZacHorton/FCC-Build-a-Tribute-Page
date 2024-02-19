--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: constellation; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.constellation (
    constellation_id integer NOT NULL,
    name character varying(60) NOT NULL,
    total_stars integer
);


ALTER TABLE public.constellation OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.constellation_constellation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.constellation_constellation_id_seq OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.constellation_constellation_id_seq OWNED BY public.constellation.constellation_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(60) NOT NULL,
    size_in_light_years text,
    shape text,
    solar_masses text
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(60) NOT NULL,
    planet_id integer,
    orbital_period text,
    surface_features text
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(60) NOT NULL,
    star_id integer,
    habitable boolean,
    age_in_billions_of_years numeric(10,1),
    year_discovered integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(60) NOT NULL,
    galaxy_id integer,
    mass text,
    luminosity text,
    part_of_constellation boolean
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: constellation constellation_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation ALTER COLUMN constellation_id SET DEFAULT nextval('public.constellation_constellation_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: constellation; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.constellation VALUES (1, 'Orion', 7);
INSERT INTO public.constellation VALUES (2, 'Ursa Major', 7);
INSERT INTO public.constellation VALUES (3, 'Cassiopeia', 5);
INSERT INTO public.constellation VALUES (4, 'Scorpius', 15);
INSERT INTO public.constellation VALUES (5, 'Cygnus', 10);
INSERT INTO public.constellation VALUES (6, 'Leo', 9);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', '100,000 to 150,000', 'Spiral', '1.5 trillion');
INSERT INTO public.galaxy VALUES (2, 'Andromeda Galaxy', '220,000', 'Spiral', '1.5 trillion');
INSERT INTO public.galaxy VALUES (3, 'Triangulum Galaxy', '60,000', 'Spiral', '40 billion');
INSERT INTO public.galaxy VALUES (5, 'Whirlpool Galaxy', '60,000', 'Spiral', '160 billion');
INSERT INTO public.galaxy VALUES (4, 'Messier 87', '120,000', 'Elliptical', '6.5 trillion');
INSERT INTO public.galaxy VALUES (6, 'Large Magellanic Cloud', '14,000', 'Irregular', '10 billion');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Luna', 3, 'approximately 27.3 days', 'Craters, Maria (large dark areas), highlands, and rilles');
INSERT INTO public.moon VALUES (2, 'Phobos', 4, 'approximately 7.6 hours', 'Heavily cratered with grooves and striations');
INSERT INTO public.moon VALUES (3, 'Deimos', 4, 'approximately 30.3 hours', 'Heavily cratered with a smooth surface');
INSERT INTO public.moon VALUES (4, 'Ganymede', 5, 'approximately 7.2 days', 'Craters, grooves, ridges, and impact basins');
INSERT INTO public.moon VALUES (5, 'Europa', 5, 'approximately 3.5 days', 'Smooth plains, fractured ice crust, and potential subsurface ocean');
INSERT INTO public.moon VALUES (6, 'Io', 5, 'approximately 1.8 days', 'Volcanic activity, sulfur plains, mountains, and calderas');
INSERT INTO public.moon VALUES (7, 'Callisto', 5, 'approximately 16.7 days', 'Craters, impact basins, and ancient terrain');
INSERT INTO public.moon VALUES (8, 'Titan', 6, 'approximately 15.9 days', 'Methane lakes, rivers, dunes, and icy mountains');
INSERT INTO public.moon VALUES (9, 'Enceladus', 6, 'approximately 1.4 days', 'Geysers, icy plumes, and tiger stripes');
INSERT INTO public.moon VALUES (10, 'Mimas', 6, 'approximately 0.9 days', 'Herschel Crater, icy surface, and grooves');
INSERT INTO public.moon VALUES (11, 'Triton', 8, 'approximately 5.9 days', 'Nitrogen geysers, icy plains, and cantaloupe terrain');
INSERT INTO public.moon VALUES (12, 'Charon', 9, 'approximately 6.4 days', 'Impact craters, chasms, and smooth plains');
INSERT INTO public.moon VALUES (13, 'Miranda', 7, 'approximately 1.4 days', 'Coronae (ridged terrain), valleys, and cliffs');
INSERT INTO public.moon VALUES (14, 'Ariel', 7, 'approximately 2.5 days', 'Craters, valleys, and canyons');
INSERT INTO public.moon VALUES (15, 'Umbriel', 7, 'approximately 4.1 days', 'Craters, scarps, and canyons');
INSERT INTO public.moon VALUES (16, 'Titania', 7, 'approximately 8.7 days', 'Craters, ridges, and valleys');
INSERT INTO public.moon VALUES (17, 'Oberon', 7, 'approximately 13.5 days', 'Craters, chasmata (canyons), and ridges');
INSERT INTO public.moon VALUES (18, 'Dione', 6, 'approximately 2.7 days', 'Fractured terrain, ice cliffs, and impact basins');
INSERT INTO public.moon VALUES (19, 'Rhea', 6, 'approximately 4.5 days', 'Craters, valleys, and bright terrain');
INSERT INTO public.moon VALUES (20, 'Iapetus', 6, 'approximately 79.3 days', 'Light and dark terrain, mountains, and craters');


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Mercury', 1, false, 4.5, NULL);
INSERT INTO public.planet VALUES (2, 'Venus', 1, false, 4.5, NULL);
INSERT INTO public.planet VALUES (3, 'Earth', 1, true, 4.5, NULL);
INSERT INTO public.planet VALUES (4, 'Mars', 1, true, 4.5, NULL);
INSERT INTO public.planet VALUES (5, 'Jupiter', 1, false, 4.5, NULL);
INSERT INTO public.planet VALUES (6, 'Saturn', 1, false, 4.5, NULL);
INSERT INTO public.planet VALUES (7, 'Uranus', 1, false, 4.5, 1781);
INSERT INTO public.planet VALUES (8, 'Neptune', 1, false, 4.5, 1846);
INSERT INTO public.planet VALUES (9, 'Pluto', 1, false, 4.5, 1930);
INSERT INTO public.planet VALUES (10, 'Ceres', 1, false, 4.6, 1801);
INSERT INTO public.planet VALUES (11, 'Titan', 1, true, 4.5, 1655);
INSERT INTO public.planet VALUES (12, 'Europa', 1, true, 4.5, 1610);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (2, 'Sirius', 1, '2.1 times the mass of the Sun', '25 times the luminosity of the Sun', true);
INSERT INTO public.star VALUES (3, 'Alpha Centauri', 1, '1.1 times the mass of the Sun', '1.5 times the luminosity of the Sun', true);
INSERT INTO public.star VALUES (1, 'Sun', 1, '1 Solar Mass', '1 Solar Luminosity', NULL);
INSERT INTO public.star VALUES (4, 'Betelgeuse', 1, '12 to 20 times the mass of the Sun', '100,000 times the luminosity of the Sun', true);
INSERT INTO public.star VALUES (5, 'Vega', 1, '2.1 times the mass of the Sun', '40 times the luminosity of the Sun', true);
INSERT INTO public.star VALUES (6, 'Proxima Centauri', 1, '12 times the mass of the Sun', '0.0017 times the luminosity of the Sun', true);


--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.constellation_constellation_id_seq', 6, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: constellation constellation_constellation_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_constellation_id_key UNIQUE (constellation_id);


--
-- Name: constellation constellation_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_pkey PRIMARY KEY (constellation_id);


--
-- Name: galaxy galaxy_galaxy_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_galaxy_id_key UNIQUE (galaxy_id);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_moon_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_moon_id_key UNIQUE (moon_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet planet_planet_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_planet_id_key UNIQUE (planet_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star star_star_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_star_id_key UNIQUE (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

