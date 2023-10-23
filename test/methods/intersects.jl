function compareGO_LG(poly_1,poly_2)
    p1 = GI.Polygon([poly_1])
    p2 = GI.Polygon([poly_2])
    LG_p1p2 = LG.intersection(p1, p2)
    GO_p1p2 = GO.intersection(p1, p2)
    # if I do GI.equals(LG_p1p2, GO_p1p2) here I get false even when it is true
    # if I wrap output of LG.intersection in GI Polygon, it still gets false
    # the only thing that returns true is turning both in LG polygon
    if length(GO_p1p2)==1
        inter_GO = LG.Polygon(convert_tuple_to_array(GO_p1p2))
    else
        temp = convert_tuple_to_array(GO_p1p2)
        inter_GO = LG.MultiPolygon([temp])
    end
    return LG.equals(inter_GO, LG_p1p2)
end

function convert_tuple_to_array(tups)
    return_polys = Array{Array{Array{Float64, 1}, 1}, 1}(undef, 0)
    for polygon in tups
        pt_list = Array{Array{Float64, 1}, 1}(undef, 0)
        for point in polygon
            push!(pt_list, [point[1], point[2]])
        end
        push!(return_polys, pt_list)
    end
    return return_polys
end

@testset "Lines/Rings" begin
    # Line test intersects -----------------------------------------------------

    # Test for parallel lines
    l1 = GI.Line([(0.0, 0.0), (2.5, 0.0)])
    l2 = GI.Line([(0.0, 1.0), (2.5, 1.0)])
    @test !GO.intersects(l1, l2)
    @test isnothing(GO.intersection(l1, l2))

    # Test for non-parallel lines that don't intersect
    l1 = GI.Line([(0.0, 0.0), (2.5, 0.0)])
    l2 = GI.Line([(2.0, -3.0), (3.0, 0.0)])
    @test !GO.intersects(l1, l2)
    @test isnothing(GO.intersection(l1, l2))

    # Test for lines only touching at endpoint
    l1 = GI.Line([(0.0, 0.0), (2.5, 0.0)])
    l2 = GI.Line([(2.0, -3.0), (2.5, 0.0)])
    @test GO.intersects(l1, l2)
    @test all(GO.intersection(l1, l2) .≈ (2.5, 0.0))

    # Test for lines that intersect in the middle
    l1 = GI.Line([(0.0, 0.0), (5.0, 5.0)])
    l2 = GI.Line([(0.0, 5.0), (5.0, 0.0)])
    @test GO.intersects(l1, l2)
    @test all(GO.intersection(l1, l2) .≈ (2.5, 2.5))

    # Line string test intersects ----------------------------------------------

    # Single element line strings crossing over each other
    l1 = LG.LineString([[5.5, 7.2], [11.2, 12.7]])
    l2 = LG.LineString([[4.3, 13.3], [9.6, 8.1]])
    @test GO.intersects(l1, l2)
    go_inter = GO.intersection(l1, l2)
    lg_inter = LG.intersection(l1, l2)
    @test go_inter[1][1] .≈ GI.x(lg_inter)
    @test go_inter[1][2] .≈ GI.y(lg_inter)

    # Multi-element line strings crossing over on vertex
    l1 = LG.LineString([[0.0, 0.0], [2.5, 0.0], [5.0, 0.0]])
    l2 = LG.LineString([[2.0, -3.0], [3.0, 0.0], [4.0, 3.0]])
    @test GO.intersects(l1, l2)
    go_inter = GO.intersection(l1, l2)
    @test length(go_inter) == 1
    lg_inter = LG.intersection(l1, l2)
    @test go_inter[1][1] .≈ GI.x(lg_inter)
    @test go_inter[1][2] .≈ GI.y(lg_inter)

    # Multi-element line strings crossing over with multiple intersections
    l1 = LG.LineString([[0.0, -1.0], [1.0, 1.0], [2.0, -1.0], [3.0, 1.0]])
    l2 = LG.LineString([[0.0, 0.0], [1.0, 0.0], [3.0, 0.0]])
    @test GO.intersects(l1, l2)
    go_inter = GO.intersection(l1, l2)
    @test length(go_inter) == 3
    lg_inter = LG.intersection(l1, l2)
    @test issetequal(
        Set(go_inter),
        Set(GO._tuple_point.(GI.getpoint(lg_inter)))
    )

    # Line strings far apart so extents don't overlap
    l1 = LG.LineString([[100.0, 0.0], [101.0, 0.0], [103.0, 0.0]])
    l2 = LG.LineString([[0.0, 0.0], [1.0, 0.0], [3.0, 0.0]])
    @test !GO.intersects(l1, l2)
    @test isnothing(GO.intersection(l1, l2))

    # Line strings close together that don't overlap
    l1 = LG.LineString([[3.0, 0.25], [5.0, 0.25], [7.0, 0.25]])
    l2 = LG.LineString([[0.0, 0.0], [5.0, 10.0], [10.0, 0.0]])
    @test !GO.intersects(l1, l2)
    @test isempty(GO.intersection(l1, l2))

    # Closed linear ring with open line string
    r1 = LG.LinearRing([[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]])
    l2 = LG.LineString([[0.0, -2.0], [12.0, 10.0],])
    @test GO.intersects(r1, l2)
    go_inter = GO.intersection(r1, l2)
    @test length(go_inter) == 2
    lg_inter = LG.intersection(r1, l2)
    @test issetequal(
        Set(go_inter),
        Set(GO._tuple_point.(GI.getpoint(lg_inter)))
    )

    # Closed linear ring with closed linear ring
    r1 = LG.LinearRing([[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]])
    r2 = LG.LineString([[3.0, 0.0], [8.0, 5.0], [13.0, 0.0], [8.0, -5.0], [3.0, 0.0]])
    @test GO.intersects(r1, r2)
    go_inter = GO.intersection(r1, r2)
    @test length(go_inter) == 2
    lg_inter = LG.intersection(r1, r2)
    @test issetequal(
        Set(go_inter),
        Set(GO._tuple_point.(GI.getpoint(lg_inter)))
    )
end

@testset "Polygons" begin
    # Two polygons that intersect
    p1 = LG.Polygon([[[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]]])
    p2 = LG.Polygon([[[3.0, 0.0], [8.0, 5.0], [13.0, 0.0], [8.0, -5.0], [3.0, 0.0]]])
    @test GO.intersects(p1, p2)
    @test all(GO.intersection_points(p1, p2) .== [(6.5, 3.5), (6.5, -3.5)])


    # Two polygons that don't intersect
    p1 = LG.Polygon([[[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]]])
    p2 = LG.Polygon([[[13.0, 0.0], [18.0, 5.0], [23.0, 0.0], [18.0, -5.0], [13.0, 0.0]]])
    @test !GO.intersects(p1, p2)
    @test isnothing(GO.intersection_points(p1, p2))

    # Polygon that intersects with linestring
    p1 = LG.Polygon([[[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]]])
    l2 = LG.LineString([[0.0, 0.0], [10.0, 0.0]])
    @test GO.intersects(p1, l2)
    GO.intersection_points(p1, l2)
    @test all(GO.intersection_points(p1, l2) .== [(0.0, 0.0), (10.0, 0.0)])

    # Polygon with a hole, line through polygon and hole
    p1 = LG.Polygon([
        [[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]],
        [[2.0, -1.0], [2.0, 1.0], [3.0, 1.0], [3.0, -1.0], [2.0, -1.0]]
    ])
    l2 = LG.LineString([[0.0, 0.0], [10.0, 0.0]])
    @test GO.intersects(p1, l2)
    @test all(GO.intersection_points(p1, l2) .== [(0.0, 0.0), (2.0, 0.0), (3.0, 0.0), (10.0, 0.0)])

    # Polygon with a hole, line only within the hole
    p1 = LG.Polygon([
        [[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]],
        [[2.0, -1.0], [2.0, 1.0], [3.0, 1.0], [3.0, -1.0], [2.0, -1.0]]
    ])
    l2 = LG.LineString([[2.25, 0.0], [2.75, 0.0]])
    @test !GO.intersects(p1, l2)
    @test isempty(GO.intersection_points(p1, l2))
end

@testset "Intersection_polygons" begin
    # nice points lists
    p1 = [[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]]
    p2 = [[3.0, 0.0], [8.0, 5.0], [13.0, 0.0], [8.0, -5.0], [3.0, 0.0]]

    # made with low spikiness so they are convex
    # poly_1 = [(4.526700198111509, 3.4853728532584696), (2.630732683726619, -4.126134282323841),
    #  (-0.7638522032421201, -4.418734350277446), (-4.367920073785058, -0.2962672719707883),
    #  (4.526700198111509, 3.4853728532584696)]

    # poly_2 = [(5.895141140952208, -0.8095078714426418), (2.8634927670695283, -4.625511746720306),
    #  (-1.790623183259246, -4.138092164660989), (-3.9856656502985843, -0.5275687876429914),
    #  (-2.554809853598822, 3.553455552936806), (1.1865909598835922, 4.984203644564732),
    #  (5.895141140952208, -0.8095078714426418)]

    poly_1 = [(4.526, 3.485), (2.630, -4.126),
     (-0.763, -4.418), (-4.367, -0.296),
     (4.526, 3.485)]

    poly_2 = [(5.895, -0.809), (2.863, -4.625),
     (-1.790, -4.138), (-3.985, -0.527),
     (-2.554, 3.553), (1.186, 4.984),
     (5.895, -0.809)]

     # polygons made with high spikiness so concave
     p5 = [(1.2938349167338743, -3.175128530227131), (-2.073885870841754, -1.6247711001754137),
     (-5.787437985975053, 0.06570713422599561), (-2.1308128111898093, 5.426689675486368),
     (2.3058074184797244, 6.926652158268195), (1.2938349167338743, -3.175128530227131)]
     p6 = [(-2.1902469793743924, -1.9576242117579579), (-4.726006206053999, 1.3907098941556428),
     (-3.165301985923147, 2.847612825874245), (-2.5529280962099428, 4.395492123980911),
     (0.5677700216973937, 6.344638314896882), (3.982554842356183, 4.853519613487035),
     (5.251193948893394, 0.9343031382106848), (5.53045582244555, -3.0101433691361734),
      (-2.1902469793743924, -1.9576242117579579)]

     # example polygon from greiner paper
     p3 = [(0.0, 0.0), (0.0, 4.0), (7.0, 4.0), (7.0, 0.0), (0.0, 0.0)]
     p4 = [(1.0, -3.0), (1.0, 1.0), (3.5, -1.5), (6.0, 1.0), (6.0, -3.0), (1.0, -3.0)]

    @test compareGO_LG(p1, p2)
    @test compareGO_LG(p3, p4)
    @test compareGO_LG(poly_1, poly_2)

end

@testset "MultiPolygons" begin
    # TODO: Add these tests
    # Multi-polygon and polygon that intersect

    # Multi-polygon and polygon that don't intersect

    # Multi-polygon that intersects with linestring
    
end